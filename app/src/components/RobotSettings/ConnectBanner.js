// @flow
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { AlertItem } from '@opentrons/components'

import type { Robot } from '../../discovery/types'

type Props = Robot

export function ConnectBanner(props: Props): React.Node {
  const { displayName, connected } = props

  const { t } = useTranslation('robot_connection')
  const [dismissed, setDismissed] = React.useState(false)

  const isVisible = connected && !dismissed
  if (!isVisible) return null

  return (
    <AlertItem
      type="success"
      onCloseClick={() => setDismissed(true)}
      title={t('success_banner', {
        robot: displayName,
      })}
    />
  )
}
