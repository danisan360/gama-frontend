import React, { useEffect } from 'react'
import { Button } from 'react-bulma-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import { toast } from 'react-toastify'

import useProcesses from '../../hooks/useProcesses'
import useAuth from '../../hooks/useAuth'

import './styles.css'

const EnrollmentList: React.FC = (props: any) => {
  const { userId } = useAuth()
  const [pId, setPId] = React.useState('')

  const { isFetching, processesList, getEnrollmentList, enrollmentList } =
    useProcesses()

  useEffect(() => {
    const processId = props.match?.params?.id
    if (processId) {
      setPId(processId)
      getEnrollmentList(processId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {}, [enrollmentList])
  const getProcessesList = () => {
    if (isFetching) {
      return <div className="not-found title">Carregando...</div>
    }

    if (enrollmentList[pId]?.length > 0) {
      return (
        <div style={{ overflowX: 'auto' }}>
          <table className="sp-table">
            <thead>
              <tr>
                <th>NOME</th>
                <th>EMAIL</th>
                <th>DATA DE NASCIMENTO</th>
              </tr>
            </thead>
            <tbody>
              {enrollmentList[pId].map(item => (
                <tr className="sp-table-row" key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.birth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <div className="not-found title">
        Não existem inscrições para esse processo
      </div>
    )
  }
  return (
    <div className="processes-list">
      <div className="top-container">
        <div className="title-container">
          <h3>Inscritos no processo seletivo</h3>
          <div className="subtitle">
            Aqui você encontra a lista de inscritos no processo seletivo
          </div>
        </div>
      </div>
      {getProcessesList()}
    </div>
  )
}

export default EnrollmentList
