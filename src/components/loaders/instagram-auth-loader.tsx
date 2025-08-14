export default function IGAUTHLoader() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        {/* Instagram-style logo placeholder */}
        <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center">
          <div className="w-10 h-10 border-3 border-white rounded-xl"></div>
        </div>

        {/* Animated loading dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
        </div>

        {/* Loading text */}
        <p className="text-muted-foreground text-sm font-medium">connecting to your insta account...</p>
      </div>
    </div>
  )
}
