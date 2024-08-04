import { Box, Slider } from '@mui/material';

const QuantitySlider = (props) => {

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                size="small"
                defaultValue={props.initialValue}
                aria-label='small'
                step={1}
                max={50}
                marks
                valueLabelDisplay='auto'
                disabled={props.disabled}
                onChangeCommitted={props.onChangeCommitted} />
        </Box>
    )
}

export default QuantitySlider