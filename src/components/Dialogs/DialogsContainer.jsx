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
    updateMessageChange: (body) => dispatch(updateNewMessageBodyCreator(body)),

    addMessage: () => dispatch(sendMessageCreater()),
  }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
