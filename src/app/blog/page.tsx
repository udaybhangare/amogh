'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Link from 'next/link'

const placeholderPosts = [
  {
    id: 1,
    title: 'Understanding Market Trends in 2023',
    description: 'An analysis of the current market trends and predictions for the coming year.',
    date: '2023-05-15',
  },
  {
    id: 2,
    title: 'The Impact of Global Events on Financial Markets',
    description: 'How recent global events have shaped and influenced financial markets worldwide.',
    date: '2023-06-02',
  },
  {
    id: 3,
    title: 'Effective Strategies for Long-term Investing',
    description: 'Key strategies to consider for successful long-term investment planning.',
    date: '2023-06-20',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

