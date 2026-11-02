import { useState, useCallback } from 'react'

function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [copied, setCopied] = useState(false)

  const generatePassword = useCallback(() => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) chars += '0123456789'
    if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(result)
    setCopied(false)
  }, [length, includeNumbers, includeSymbols])

  const copyToClipboard = () => {
    if (!password) return
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    // <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">🔐 Password Generator</h1>

        {/* Password Display */}
        <div className="flex items-center bg-gray-700 rounded-lg px-4 py-3 mb-6 gap-2">
          <span className="text-green-400 font-mono text-sm flex-1 break-all">
            {password || 'Click Generate to create a password'}
          </span>
          <button
            onClick={copyToClipboard}
            className="text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition"
          >
            {copied ? '✅ Copied!' : 'Copy'}
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="text-gray-300 text-sm flex justify-between mb-1">
            <span>Password Length</span>
            <span className="text-white font-bold">{length}</span>
          </label>
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={e => setLength(Number(e.target.value))}
            className="w-full accent-green-500"
          />
        </div>

        {/* Checkboxes */}
        <div className="mb-6 space-y-3">
          <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={e => setIncludeNumbers(e.target.checked)}
              className="w-4 h-4 accent-green-500"
            />
            Include Numbers (0-9)
          </label>
          <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={e => setIncludeSymbols(e.target.checked)}
              className="w-4 h-4 accent-green-500"
            />
            Include Symbols (!@#$...)
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition text-lg"
        >
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator
