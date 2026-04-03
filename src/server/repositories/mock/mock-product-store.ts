import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import type { ProductState } from "@/lib/types/product";

const mockDirectory = path.join(process.cwd(), "src", "data", "mock");
const seedPath = path.join(mockDirectory, "product-seed.json");
const localStatePath = path.join(mockDirectory, "product-state.local.json");

async function readJson(filePath: string): Promise<ProductState> {
  const content = await readFile(filePath, "utf8");
  return JSON.parse(content) as ProductState;
}

export async function readProductState(): Promise<ProductState> {
  try {
    return await readJson(localStatePath);
  } catch (error) {
    const { code } = error as NodeJS.ErrnoException;

    if (code === "ENOENT") {
      return readJson(seedPath);
    }

    throw error;
  }
}

export async function writeProductState(state: ProductState) {
  await mkdir(mockDirectory, { recursive: true });
  await writeFile(localStatePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}
