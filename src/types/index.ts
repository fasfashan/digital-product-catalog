export type SolutionCategory = 'banking' | 'cash-management' | 'retail-signage'

export interface SolutionItem {
  id: SolutionCategory
  title: string
  subtitle?: string
  description: string
  thumbnail?: string
}

export interface ProductItem {
  id: string
  categoryId: SolutionCategory
  name: string
  tagline?: string
  description: string
  features?: string[]
  specifications?: Record<string, string>
  images?: string[]
}
