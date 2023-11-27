import styles from './styles.module.scss'
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from '@mui/x-date-pickers';
import {Button} from '../../Button/Buttons';

const FirstTab = () => {
	return (
		 <div className={styles.firstTab}>
			 <form>
				 <span>45 Peremohy St., Kyiv, Ukraine</span>
				 <div className={styles.wrappPicker}>
					 <DatePicker
						  className={styles.datePicker}
						  label="Date"
						  sx={{
							  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #C5B4B9",borderRadius:"0px"},      // at page load
							  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #231104",borderRadius:"0px"},  // at hover state
							  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #231104",borderRadius:"0px"}, // at focused state

						  }}

					 />
					 <TimePicker
						  className={styles.timePicker}
						  sx={{
							  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #C5B4B9",borderRadius:"0px"},      // at page load
							  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #231104",borderRadius:"0px"},  // at hover state
							  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {border: 'none' ,borderBottom:"2px solid #231104",borderRadius:"0px"}, // at focused state

						  }}
					 />
				 </div>
				 <Button text='Continue' colorMode='black' style={{marginTop: '40px'}}/>
			 </form>
		 </div>
	);
};
export default FirstTab;
