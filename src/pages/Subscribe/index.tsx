/* eslint-disable camelcase */
import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Form, Button, Icon } from 'react-bulma-components'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faUser,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import useSubscribe from '../../hooks/useSubscribe'

import '../Register/styles.css'

interface SubscribeFormData {
  selectiveProcessId: number
  name: string
  birthDate: Date
  email: string
}

interface SubscribeParams {
  id: string
}

const Subscribe: React.FC = () => {
  const { id: selectiveProcessId } = useParams<SubscribeParams>()

  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      selectiveProcessId: parseInt(selectiveProcessId, 10),
      name: '',
      birthDate: new Date(),
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Insira seu nome'),
      birthDate: Yup.date().required('Insira sua data de nascimento'),
      email: Yup.string()
        .email('Endereço de e-mail inválido.')
        .required('Insira um e-mail.'),
    }),
    validateOnChange: false,
    onSubmit: handleSubmit,
  })

  const { subscribe } = useSubscribe()

  async function handleSubmit({
    selectiveProcessId,
    name,
    birthDate,
    email,
  }: SubscribeFormData) {
    try {
      await subscribe(selectiveProcessId, email, name, birthDate)

      history.push('/')
    } catch {
      toast.error('Erro ao tentar se inscrever')
    } finally {
      formik.setSubmitting(false)
    }
  }

  return (
    <div className="register-container" style={{ marginTop: '2rem' }}>
      <div className="register-card">
        <Link to="/" className="register-logo">
          Gama
        </Link>
        <p className="register-title">Inscrição</p>
        <p className="register-subtitle">Se inscreva no processo seletivo!</p>

        <form className="register-form" onSubmit={formik.handleSubmit}>
          {formik.errors.name ? (
            <div>
              <p className="register-error">{formik.errors.name}</p>
            </div>
          ) : null}
          <Form.Field>
            <Form.Control>
              <Icon align="left" className="register-icon">
                <FontAwesomeIcon icon={faUser} />
              </Icon>
              <Form.Input
                placeholder="Nome Completo"
                id="name"
                name="name"
                className="register-input"
                size="medium"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Form.Control>
          </Form.Field>

          {formik.errors.birthDate ? (
            <div>
              <p className="register-error">{formik.errors.birthDate}</p>
            </div>
          ) : null}
          <Form.Field>
            <Form.Control>
              <Icon align="left" className="register-icon">
                <FontAwesomeIcon icon={faBuilding} />
              </Icon>
              <Form.Input
                placeholder="Data de Nascimento"
                id="birthDate"
                name="birthDate"
                className="register-input"
                size="medium"
                onChange={formik.handleChange}
                value={formik.values.birthDate}
                type="date"
              />
            </Form.Control>
          </Form.Field>

          {formik.errors.email ? (
            <div>
              <p className="register-error">{formik.errors.email}</p>
            </div>
          ) : null}
          <Form.Field>
            <Form.Control>
              <Icon align="left" className="register-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </Icon>
              <Form.Input
                placeholder="E-mail"
                id="email"
                name="email"
                className="register-input"
                size="medium"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Form.Control>
          </Form.Field>

          <Button
            type="submit"
            className="register-button"
            loading={formik.isSubmitting}
            fullwidth
          >
            Se inscrever
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
