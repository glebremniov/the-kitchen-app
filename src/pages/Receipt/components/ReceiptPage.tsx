import { DMYTabGroup } from '../../../shared'

export const ReceiptPage = () => (
  <>
    <DMYTabGroup
      day={(
        <ul>
          <li>1. Per Day</li>
          <li>2. Per Day</li>
          <li>3. Per Day</li>
        </ul>
      )}
      month={(
        <ul>
          <li>1. Per Month</li>
          <li>2. Per Month</li>
          <li>3. Per Month</li>
        </ul>
      )}
      year={(
        <ul>
          <li>1. Per Year</li>
          <li>2. Per Year</li>
          <li>3. Per Year</li>
        </ul>
      )}
    />
  </>
)