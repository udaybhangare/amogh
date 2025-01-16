'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<{
    name: string;
    email: string;
    message: string;
  }>()

  const onSubmit = (data: { name: string; email: string; message: string }) => {
    console.log(data)
    // Here you would typically send the form data to your backend
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              className={errors.message ? 'border-red-500' : ''}
              rows={6}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </motion.form>
      </div>
    </div>
  )
}

