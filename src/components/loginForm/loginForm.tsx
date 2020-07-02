import * as React from 'react'
import { useState } from 'react'
import { TextField, IconButton, Backdrop, CircularProgress } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
interface Props {
  /** mutation to be called on login */
  login: (username: string) => void
}

export const LoginForm = (props: Props) => {

  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  // const { userHasAuthenticated } = useAppContext();

  const onClick = () => {
    // userHasAuthenticated(true);
    setOpen(true);
    props.login(input)
  }

  return (
  <React.Fragment>
    <form noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="username"
          label="username"
          variant="outlined"
          value={input}
          onChange={(e)=>{setInput(e.target.value)}}
          />
        <IconButton aria-label="login" color="primary" onClick={() => {onClick()}}>
          <ArrowForwardIcon />
        </IconButton>
      </div>
      </form>
      <Backdrop open={open} >
        <CircularProgress color="inherit" />
      </Backdrop>
  </React.Fragment>
  )

}
