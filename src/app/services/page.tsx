'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { LineChartIcon as ChartLineUp, PiggyBank, TrendingUp, Users } from 'lucide-react'

const services = [
  {
    title: 'Professional Trading',
    description: 'Expert trading strategies and execution for optimal market performance.',
    icon: ChartLineUp,
  },
  {
    title: 'Financial Advisory',
    description: 'Comprehensive financial planning and investment advice tailored to your goals.',
    icon: PiggyBank,
  },
  {
    title: 'Market Analysis',
    description: 'In-depth analysis of market trends and economic factors to inform your decisions.',
    icon: TrendingUp,
  },
  {
    title: 'Portfolio Management',
    description: 'Effective management and optimization of your investment portfolio.',
    icon: Users,
  },
]

export default function Services() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="w-6 h-6 mr-2" />
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn more about how our {service.title.toLowerCase()} services can benefit you.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

