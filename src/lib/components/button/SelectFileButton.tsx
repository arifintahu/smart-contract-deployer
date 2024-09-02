import { Button, Input } from '@chakra-ui/react'
import { useRef } from 'react'

interface SelectFileBtnProps {
  maxSize?: number
  onChange: (fileContents: string[]) => void
  allowedExtensions?: string[]
}
export const SelectFileBtn = ({
  maxSize = 5000000, // 5MB
  onChange,
  allowedExtensions = [],
}: SelectFileBtnProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const isFileExtensionAllowed = (fileName: string): boolean => {
    if (allowedExtensions.length === 0) return true // No restrictions if no extensions are provided
    const extension = fileName.split('.').pop()?.toLowerCase()
    return allowedExtensions.includes(extension || '')
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles)
      const validFiles = fileArray.filter(
        (file) => isFileExtensionAllowed(file.name) && file.size <= maxSize
      )
      const fileReaders = validFiles.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result as string)
          reader.onerror = () => reject(reader.error)
          reader.readAsText(file)
        })
      })

      Promise.all(fileReaders)
        .then((fileContents) => {
          onChange(fileContents)
        })
        .catch((error) => {
          console.error('Error reading files:', error)
        })
    }
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  const getAcceptAttribute = (): string | undefined => {
    if (allowedExtensions.length === 0) return undefined
    return allowedExtensions.map((ext) => `.${ext}`).join(',')
  }

  return (
    <>
      <Button variant="outline-gray" w="128px" onClick={handleClick}>
        Select File
      </Button>
      <Input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        display="none"
        accept={getAcceptAttribute()}
      />
    </>
  )
}
