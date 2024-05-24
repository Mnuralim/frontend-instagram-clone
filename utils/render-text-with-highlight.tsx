export const renderTextWithHighlight = (text: string) => {
  const parts = text.split(/(@\w+)/)

  return parts.map((part, index) => {
    if (part.startsWith('@')) {
      return (
        <span key={index} className="text-blue-500">
          {part}
        </span>
      )
    }
    return <span key={index}>{part}</span>
  })
}
