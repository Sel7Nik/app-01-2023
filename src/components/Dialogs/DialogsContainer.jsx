import { Dialogs } from './Dialogs'
import { sendMessageCreater, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageChange: () => dispatch(updateNewMessageBodyCreator()),

    addMessage: (body) => dispatch(sendMessageCreater(body)),
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
