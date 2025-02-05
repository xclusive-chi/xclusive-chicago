import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"

interface NumberInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
}

export function NumberInput({ id, label, value, onChange }: NumberInputProps) {
  const MIN = 0
  const MAX = 10

  const handleIncrement = () => {
    const currentValue = parseInt(value) || MIN
    if (currentValue < MAX) {
      onChange((currentValue + 1).toString())
    }
  }

  const handleDecrement = () => {
    const currentValue = parseInt(value) || MIN
    if (currentValue > MIN) {
      onChange((currentValue - 1).toString())
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (newValue === "") {
      onChange(MIN.toString())
      return
    }
    const numValue = parseInt(newValue)
    if (!isNaN(numValue) && numValue >= MIN && numValue <= MAX) {
      onChange(numValue.toString())
    }
  }

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-center space-x-2 mt-1">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleDecrement}
          className="h-10 w-10"
        >
          -
        </Button>
        <Input
          id={id}
          type="number"
          value={value}
          onChange={handleInputChange}
          className="text-center"
          min={MIN}
          max={MAX}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleIncrement}
          className="h-10 w-10"
        >
          +
        </Button>
      </div>
    </div>
  )
} 