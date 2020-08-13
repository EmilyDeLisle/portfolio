import React from 'react'

export interface NavigationComponentProps {
  handleNavigationClick: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement | HTMLLIElement>,
    anchorId: string
  ) => void
}
