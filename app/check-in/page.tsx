"use client"

<<<<<<< HEAD
import { useState } from "react"
=======
import { useState, FormEvent, ChangeEvent } from "react"
>>>>>>> 9b9f42d (Updated website files)
import { useRouter } from "next/navigation"
import { getGuestByVoucherCode, updateGuestCheckIn } from "../services/supabaseService"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
<<<<<<< HEAD
=======
import { Spinner } from "../../components/ui/spinner"
>>>>>>> 9b9f42d (Updated website files)

export default function CheckIn() {
  const [voucherCode, setVoucherCode] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
<<<<<<< HEAD

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
=======
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
>>>>>>> 9b9f42d (Updated website files)
    try {
      const guest = await getGuestByVoucherCode(voucherCode)
      if (!guest) {
        setError("Invalid voucher code. Please check and try again.")
        return
      }
      if (guest.checkedIn) {
        setError("You have already checked in. Please see staff for assistance.")
        return
      }
      const success = await updateGuestCheckIn(guest.id)
      if (success) {
        router.push(`/door-verification/${guest.id}`)
      } else {
        setError("An error occurred. Please try again or see staff for assistance.")
      }
    } catch (error) {
      console.error("Error during check-in:", error)
      setError("An error occurred. Please try again or see staff for assistance.")
<<<<<<< HEAD
=======
    } finally {
      setIsLoading(false)
>>>>>>> 9b9f42d (Updated website files)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md text-center mb-8">
        <Link href="/">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/340164027_737893057833813_3986126282337412231_n.jpg-6mKCMz9NNE8RpFtxi86zgsiBEEYswM.jpeg"
            alt="Xclusive Chicago"
            width={150}
            height={150}
            className="mx-auto mb-4"
          />
        </Link>
        <h1 className="text-4xl font-bold mb-2 text-white">XCLUSIVE CHICAGO</h1>
        <p className="text-xl mb-8 text-gray-400">Experience Luxury. Experience Chicago.</p>
      </div>
      <div className="gold-border rounded-lg max-w-md w-full">
        <div className="bg-black rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Check-In on Arrival</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="voucherCode" className="text-white">
                Voucher Code
              </Label>
              <Input
                type="text"
                id="voucherCode"
                value={voucherCode}
<<<<<<< HEAD
                onChange={(e) => setVoucherCode(e.target.value)}
=======
                onChange={(e: ChangeEvent<HTMLInputElement>) => setVoucherCode(e.target.value)}
>>>>>>> 9b9f42d (Updated website files)
                required
                className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 bg-white text-black py-3 px-4 text-lg font-mono"
                placeholder="Enter your voucher code"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
<<<<<<< HEAD
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            >
              Verify and Check In
=======
              disabled={isLoading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            >
              {isLoading ? (
                <>
                  <Spinner className="mr-2 h-4 w-4" />
                  Verifying...
                </>
              ) : (
                "Verify and Check In"
              )}
>>>>>>> 9b9f42d (Updated website files)
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

