import CategoriesHeader from '@/components/categories/CategoriesHeader'
import OccasionStrip from '@/components/categories/OccasionStrip'
import CategoriesGrid from '@/components/categories/CategoriesGrid'
import CategoryCTA from '@/components/categories/CategoryCTA'

export const metadata = {
  title: 'Shop by Occasion — Memory Studio',
  description:
    'Browse Memory Studio gifts by occasion — birthdays, anniversaries, weddings, couples, babies, and corporate. Every occasion has its own language.',
}

export default function CategoriesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#F6F2EC', paddingTop: '6rem' }}>
      <CategoriesHeader />
      <OccasionStrip />
      <CategoriesGrid />
      <CategoryCTA />
    </main>
  )
}
