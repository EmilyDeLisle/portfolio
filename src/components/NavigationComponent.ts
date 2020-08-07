import React from 'react'

export interface NavigationComponentProps {
  handleNavigationClick: (event: React.MouseEvent<HTMLDivElement>, anchorId: string) => void
}
