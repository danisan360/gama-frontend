import React, { useEffect } from 'react'
import { Button } from 'react-bulma-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faList } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import { toast } from 'react-toastify'

import useProcesses from '../../hooks/useProcesses'
import useAuth from '../../hooks/useAuth'

import './styles.css'

const ProcessesList: React.FC = () => {
  const { userId } = useAuth()

  const { isFetching, processesList, getProcessesByContractor, deleteProcess } =
    useProcesses()

  useEffect(() => {
    getProcessesByContractor(Number(userId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleDelete(id: number) {
    try {
      await deleteProcess(id)
      toast.success('Processo seletivo excluido!')
    } catch {
      toast.error('Não foi possível deletar este processo')
    } finally {
      getProcessesByContractor(Number(userId))
    }
  }

  const getProcessesList = () => {
    if (isFetching) {
      return <div className="not-found title">Carregando...</div>
    }

    if (processesList.length !== 0) {
      return (
        <div style={{ overflowX: 'auto' }}>
          <table className="sp-table">
            <thead>
              <tr>
                <th>TÍTULO</th>
                <th>PRAZO</th>
                <th>CONTATO</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {processesList.map(item => (
                <tr className="sp-table-row" key={item.id}>
                  <Link to={`/enrollments/${item.id}`}>
                    <td>{item.title}</td>
                  </Link>
                  <td>{format(item.deadline, 'dd/MM/yyyy')}</td>
                  <td>{item.contact}</td>
                  <td style={{ display: 'flex' }}>
                    <Link
                      to="/processes"
                      onClick={() => {
                        handleDelete(item.id)
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <div className="not-found title">
        Você não tem processos seletivos cadastrados
      </div>
    )
  }
  return (
    <div className="processes-list">
      <div className="top-container">
        <div className="title-container">
          <h3>Processos Seletivos</h3>
          <div className="subtitle">
            Aqui ficam todos os seus processos seletivos, gerencie-os como
            desejar.
          </div>
        </div>
        <Link to="/processes/create">
          <Button type="button" className="header-button">
            Criar Processo Seletivo
          </Button>
        </Link>
      </div>
      {getProcessesList()}
    </div>
  )
}

export default ProcessesList
