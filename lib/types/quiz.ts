/**
 * Quiz Question TypeScript Interface
 * Ensures type safety for all quiz questions across course data files
 */

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface CourseModule {
  id: number
  title: string
  content: string
  quiz?: {
    title: string
    questions: QuizQuestion[]
  }
}

/**
 * Validation utility to catch quiz data errors during development
 * Includes checks for nested quotes and other common TypeScript syntax errors
 */
export function validateQuizQuestions(questions: unknown[]): questions is QuizQuestion[] {
  return questions.every((q) => {
    if (typeof q !== 'object' || q === null) return false
    const question = q as Record<string, unknown>
    
    // Basic type checks
    const hasValidTypes =
      typeof question.id === 'number' &&
      typeof question.question === 'string' &&
      Array.isArray(question.options) &&
      question.options.every((opt) => typeof opt === 'string') &&
      typeof question.correctAnswer === 'number' &&
      typeof question.explanation === 'string' &&
      question.correctAnswer >= 0 &&
      question.correctAnswer < (question.options as string[]).length

    if (!hasValidTypes) return false

    // Check for nested unescaped quotes in strings that would break TypeScript
    const explanation = question.explanation as string
    const checkForNestedQuotes = (str: string): boolean => {
      // Look for patterns like "text "quoted" more" which are invalid
      const nestedQuotePattern = /"[^"]*"[^"]*"/
      return !nestedQuotePattern.test(str)
    }

    return (
      checkForNestedQuotes(explanation) &&
      checkForNestedQuotes(question.question as string)
    )
  })
}

/**
 * Type guard to check if a string contains unescaped nested quotes
 * This helps catch TypeScript syntax errors before compilation
 */
export function hasUnescapedNestedQuotes(str: string): boolean {
  // Pattern: "...text "unescaped" text..."
  const unescapedNestedQuotePattern = /"([^"\\]|\\.)*"[^"]*"([^"\\]|\\.)*"/
  return unescapedNestedQuotePattern.test(str)
}
