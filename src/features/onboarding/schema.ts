import type { OnboardingStepDefinition } from "@/lib/types/product";

export const onboardingStepDefinitions: OnboardingStepDefinition[] = [
  {
    id: "basics",
    title: "Basic fit",
    shortTitle: "Basics",
    description:
      "Capture who the user is, where they are, and what kind of connection they actually want from the product.",
    fields: [
      {
        key: "fullName",
        label: "What should people call you?",
        description: "Use the display name you would want in a thoughtful chess context.",
        type: "text",
        placeholder: "Alex Rivera",
      },
      {
        key: "homeBase",
        label: "Where are you based?",
        description: "This helps separate remote-first and local-compatible connections later.",
        type: "text",
        placeholder: "Berlin, Germany",
      },
      {
        key: "ageBand",
        label: "Which age band fits best?",
        description: "Used only as matching context, not as a public headline.",
        type: "single-select",
        options: [
          { value: "25-29", label: "25-29" },
          { value: "30-39", label: "30-39" },
          { value: "40-45", label: "40-45" },
          { value: "46+", label: "46+" },
        ],
      },
      {
        key: "connectionGoals",
        label: "What are you open to?",
        description: "This keeps the product broader than dating while still supporting meaningful connection.",
        type: "multi-select",
        options: [
          { value: "training_partner", label: "Training partner" },
          { value: "accountability_buddy", label: "Accountability buddy" },
          { value: "chess_companion", label: "Chess companion" },
          { value: "romantic_match", label: "Optional romantic match" },
        ],
      },
    ],
  },
  {
    id: "chess",
    title: "Chess profile",
    shortTitle: "Chess",
    description:
      "Establish a first pass at skill context, goals, study rhythm, and the kind of improvement experience the user wants.",
    fields: [
      {
        key: "primaryGoal",
        label: "What is the main chess goal right now?",
        description: "A short-term anchor lets matching and routines stay relevant.",
        type: "single-select",
        options: [
          { value: "tournament_steadiness", label: "Tournament steadiness" },
          { value: "rating_growth", label: "Rating growth" },
          { value: "returning_to_chess", label: "Returning to chess well" },
          { value: "better_study_habits", label: "Better study habits" },
        ],
      },
      {
        key: "currentLevel",
        label: "How would you describe your current level?",
        description: "A qualitative band is enough for MVP; exact ratings can come later.",
        type: "single-select",
        options: [
          { value: "developing", label: "Developing player" },
          { value: "club", label: "Club player" },
          { value: "serious_amateur", label: "Serious amateur" },
          { value: "advanced", label: "Advanced competitor" },
        ],
      },
      {
        key: "playStyle",
        label: "Which environment matters most?",
        description: "This helps distinguish online-only use from club and tournament intent.",
        type: "single-select",
        options: [
          { value: "online_first", label: "Online first" },
          { value: "club_first", label: "Club first" },
          { value: "tournament_first", label: "Tournament first" },
          { value: "mixed", label: "Mixed" },
        ],
      },
      {
        key: "studyCadence",
        label: "How often do you realistically study?",
        description: "MVP prioritizes realistic routine fit over aspirational promises.",
        type: "single-select",
        options: [
          { value: "1-2_sessions", label: "1-2 sessions per week" },
          { value: "3-4_sessions", label: "3-4 sessions per week" },
          { value: "5+_sessions", label: "5+ sessions per week" },
        ],
      },
    ],
  },
  {
    id: "health",
    title: "Health profile",
    shortTitle: "Health",
    description:
      "Gather the baseline signals that influence performance quality: sleep, nutrition, mobility, and recovery after losses.",
    fields: [
      {
        key: "sleepConsistency",
        label: "How stable is your sleep rhythm?",
        description: "This can later drive targeted suggestions before events and after heavy study weeks.",
        type: "single-select",
        options: [
          { value: "fragile", label: "Fragile" },
          { value: "inconsistent", label: "Inconsistent" },
          { value: "mostly_stable", label: "Mostly stable" },
          { value: "very_stable", label: "Very stable" },
        ],
      },
      {
        key: "nutritionFocus",
        label: "How intentional is your chess-day nutrition?",
        description: "The goal is practical support, not extreme dietary identity.",
        type: "single-select",
        options: [
          { value: "rarely_think_about_it", label: "Rarely think about it" },
          { value: "trying_to_improve", label: "Trying to improve" },
          { value: "already_structured", label: "Already structured" },
        ],
      },
      {
        key: "mobilityLevel",
        label: "How does long sitting affect you?",
        description: "Useful for movement habit suggestions and shared Duo Mode routines later.",
        type: "single-select",
        options: [
          { value: "major_issue", label: "Major issue" },
          { value: "noticeable", label: "Noticeable" },
          { value: "manageable", label: "Manageable" },
        ],
      },
      {
        key: "tiltRecovery",
        label: "How quickly do you recover after a frustrating loss?",
        description: "Mental recovery is one of the clearest product differentiators.",
        type: "single-select",
        options: [
          { value: "slow", label: "Slowly" },
          { value: "mixed", label: "It depends" },
          { value: "structured", label: "I already have a reset habit" },
        ],
      },
    ],
  },
  {
    id: "matching",
    title: "Matching preferences",
    shortTitle: "Matching",
    description:
      "Define the first compatibility signals for people, schedules, and communication expectations.",
    fields: [
      {
        key: "lookingFor",
        label: "Which matching lane matters most right now?",
        description: "MVP matching should be precise about intention from the start.",
        type: "multi-select",
        options: [
          { value: "training_partner", label: "Training partner" },
          { value: "accountability_buddy", label: "Accountability buddy" },
          { value: "chess_companion", label: "Chess companion" },
          { value: "romantic_match", label: "Optional romantic match" },
        ],
      },
      {
        key: "availability",
        label: "When are you usually available?",
        description: "Time overlap is one of the strongest practical matching filters.",
        type: "multi-select",
        options: [
          { value: "weekday_mornings", label: "Weekday mornings" },
          { value: "weekday_evenings", label: "Weekday evenings" },
          { value: "saturday", label: "Saturdays" },
          { value: "sunday", label: "Sundays" },
        ],
      },
      {
        key: "communicationStyle",
        label: "What communication style feels best?",
        description: "Good matching is partly about tone and expectations, not just goals.",
        type: "single-select",
        options: [
          { value: "direct", label: "Direct and concise" },
          { value: "warm", label: "Warm and encouraging" },
          { value: "structured", label: "Structured and check-in oriented" },
        ],
      },
      {
        key: "duoModeInterest",
        label: "How interested are you in Duo Mode?",
        description: "This indicates whether paired routines should be a core part of the experience.",
        type: "single-select",
        options: [
          { value: "low", label: "Low" },
          { value: "curious", label: "Curious" },
          { value: "high", label: "High" },
        ],
      },
    ],
  },
];
