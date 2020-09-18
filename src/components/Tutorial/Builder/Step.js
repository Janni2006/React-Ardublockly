import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addStep, removeStep, changeStepIndex } from '../../../actions/tutorialBuilderActions';

import Textfield from './Textfield';
import StepType from './StepType';
import BlocklyExample from './BlocklyExample';
import Requirements from './Requirements';
import Hardware from './Hardware';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { faPlus, faAngleDoubleUp, faAngleDoubleDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = (theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '40px',
    height: '40px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    }
  }
});

class Step extends Component {

  render() {
    var index = this.props.index;
    var steps = this.props.steps;
    return (
      <div style={{borderRadius: '25px', background: 'lightgrey', padding: '10px 14px 10px 10px', marginBottom: '20px'}}>
        <Typography variant='h6' style={{marginBottom: '10px', marginLeft: '4px'}}>Schritt {index+1}</Typography>
        <div style={{display: 'flex', position: 'relative'}}>
          <div style={{width: '40px', marginRight: '10px', position: 'absolute', left: '4px', bottom: '10px'}}>
            <Tooltip title='Schritt hinzufügen' arrow>
              <IconButton
                className={this.props.classes.button}
                style={index === 0 ? {} : {marginBottom: '5px'}}
                onClick={() => this.props.addStep(index+1)}
              >
                <FontAwesomeIcon icon={faPlus} size="xs"/>
              </IconButton>
            </Tooltip>
            {index !== 0 ?
              <div>
                <Tooltip title={`Schritt ${index+1} nach oben schieben`} arrow>
                  <IconButton
                    disabled={index < 2}
                    className={this.props.classes.button}
                    style={{marginBottom: '5px'}}
                    onClick={() => this.props.changeStepIndex(index, index-1)}
                  >
                    <FontAwesomeIcon icon={faAngleDoubleUp} size="xs"/>
                  </IconButton>
                </Tooltip>
                <Tooltip title={`Schritt ${index+1} nach unten schieben`} arrow>
                  <IconButton
                    disabled={index === steps.length-1}
                    className={this.props.classes.button}
                    style={{marginBottom: '5px'}}
                    onClick={() => this.props.changeStepIndex(index, index+1)}
                  >
                    <FontAwesomeIcon icon={faAngleDoubleDown} size="xs"/>
                  </IconButton>
                </Tooltip>
                <Tooltip title={`Schritt ${index+1} löschen`} arrow>
                  <IconButton
                    disabled={index === 0}
                    className={this.props.classes.button}
                    onClick={() => this.props.removeStep(index)}
                  >
                    <FontAwesomeIcon icon={faTrash} size="xs"/>
                  </IconButton>
                </Tooltip>
              </div>
            : null}
          </div>
          <div style={{width: '100%', marginLeft: '54px'}}>
            <StepType value={this.props.step.type} index={index} />
            <Textfield value={this.props.step.headline} property={'headline'} label={'Überschrift'} index={index}/>
            <Textfield value={this.props.step.text} property={'text'} label={this.props.step.type === 'task' ? 'Aufgabenstellung' : 'Instruktionen'} index={index} multiline/>
            {index === 0 ?
              <div>
                <Requirements value={this.props.step.requirements} index={index}/>
                <Hardware value={this.props.step.hardware} index={index} />
              </div>
            : null}
            <BlocklyExample value={this.props.step.xml} index={index} task={this.props.step.type === 'task'}/>
          </div>
        </div>
      </div>
    );
  };
}

Step.propTypes = {
  addStep: PropTypes.func.isRequired,
  removeStep: PropTypes.func.isRequired,
  changeStepIndex: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  change: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  steps: state.builder.steps,
  change: state.builder.change
});

export default connect(mapStateToProps, { addStep, removeStep, changeStepIndex })(withStyles(styles, {withTheme: true})(Step));
