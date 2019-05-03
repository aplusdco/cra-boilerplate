interface Window {
  analytics: Analytics
}

interface AnalyticsProps {
  location?: string
  position?: number
  category?: string
  label?: string
  action?: string
}
