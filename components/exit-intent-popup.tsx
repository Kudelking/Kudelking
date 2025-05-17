"use client"

export function ExitIntentPopup() {
  // Компонент отключен - всегда возвращает null
  return null

  // Оригинальный код закомментирован ниже, если потребуется восстановить функциональность
  /*
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [exitIntentDetected, setExitIntentDetected] = useState(false)

  useEffect(() => {
    // Check if the popup has been shown before in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenExitPopup") === "true"

    if (!hasSeenPopup) {
      const handleMouseLeave = (e: MouseEvent) => {
        // Only trigger when mouse leaves through the top of the page
        if (e.clientY <= 0 && !exitIntentDetected) {
          setExitIntentDetected(true)
          // Delay showing popup slightly for better UX
          setTimeout(() => {
            setIsVisible(true)
            sessionStorage.setItem("hasSeenExitPopup", "true")
          }, 300)
        }
      }

      // Also show after 60 seconds if user hasn't triggered exit intent
      const timer = setTimeout(() => {
        if (!exitIntentDetected) {
          setIsVisible(true)
          sessionStorage.setItem("hasSeenExitPopup", "true")
        }
      }, 60000)

      document.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave)
        clearTimeout(timer)
      }
    }
  }, [exitIntentDetected])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your CRM/marketing system
    console.log("Exit intent form submitted:", { email, phone })
    setIsSubmitted(true)

    // Close popup after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <CardHeader className="pb-2">
          <CardTitle className="text-center text-xl sm:text-2xl">
            {isSubmitted ? "Thank You!" : "Wait! Don't Miss Out"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <p className="text-muted-foreground mb-2">We'll be in touch with you shortly!</p>
              <p className="font-medium">Your consultation is on the way.</p>
            </div>
          ) : (
            <>
              <div className="bg-muted p-3 rounded-lg mb-4">
                <p className="font-medium text-center">Get $200 OFF Your Next Project</p>
                <p className="text-sm text-center text-muted-foreground">Limited time offer for new customers</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="exit-email">Email</Label>
                  <Input
                    id="exit-email"
                    type="email"
                    placeholder="Your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exit-phone">Phone (Optional)</Label>
                  <Input
                    id="exit-phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Claim My $200 Discount
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to receive marketing emails. You can unsubscribe at any time.
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
  */
}
