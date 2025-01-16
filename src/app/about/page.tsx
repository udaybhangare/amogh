'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen py-8 px-4 sm:py-16">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Amogh Shirke
        </motion.h1>
        <div className="grid gap-8 sm:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-sm mx-auto sm:max-w-none"
          >
            <Image
              src="/placeholder.svg"
              alt="Amogh Shirke"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Professional Trader & Financial Advisor</h2>
            <p className="text-muted-foreground mb-4">
              With over a decade of experience in the financial markets, I specialize in providing
              expert trading strategies and comprehensive financial advice to individuals and
              businesses alike.
            </p>
            <p className="text-muted-foreground mb-4">
              My approach combines in-depth market analysis with a keen understanding of economic
              trends, allowing me to offer tailored solutions that help my clients achieve their
              financial goals.
            </p>
            <p className="text-muted-foreground">
              Whether you&apos;re looking to optimize your investment portfolio, develop a robust
              trading strategy, or seek guidance on complex financial decisions, I&apos;m here to help
              you navigate the ever-changing landscape of the financial world.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

