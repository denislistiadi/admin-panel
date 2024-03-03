import { Modal } from 'antd'

const ErrorModal = () => {
  const { error } = Modal

  const showModal = (message) => {
    error({
      title: 'Server Error!',
      content: message,
      okText: 'OK',
    })
  }

  return {
    showModal,
  }
}

export default ErrorModal
