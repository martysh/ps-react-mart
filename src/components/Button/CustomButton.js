import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const StyledButton = withStyles({
  root: {
    background: '#5066C2',
    borderRadius: '0.25em',
    padding: '0.5em 0.7em',
    color: '#fff',
    border: 0,
    fontSize: '1em',
  },
  label: {
    textTransform: 'lowercase',
  },
})(Button);

export default StyledButton;
