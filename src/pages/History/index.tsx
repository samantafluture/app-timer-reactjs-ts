import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles
              ? cycles?.map((cycle) => {
                  return (
                    <tr key={cycle.id}>
                      <td>{cycle.task}</td>
                      <td>{cycle.minutesAmount} minutes</td>
                      <td>
                        {formatDistanceToNow(new Date(cycle.startDate), {
                          addSuffix: true,
                        })}
                      </td>
                      <td>
                        {cycle.finishedDate && (
                          <Status statusColor="green">Done</Status>
                        )}
                        {cycle.interruptedDate && (
                          <Status statusColor="red">Stopped</Status>
                        )}
                        {!cycle.finishedDate && !cycle.interruptedDate && (
                          <Status statusColor="yellow">Doing</Status>
                        )}
                      </td>
                    </tr>
                  )
                })
              : null}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
