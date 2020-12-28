import React, { ReactElement, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { addEducationData } from '../../../redux/actions/educationAction';
import { universityData } from '../../../redux/actionTypes';
import EducationTemplate from '../../templates/educationTemplate';

const useStyle = makeStyles((theme) => ({
  heading: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
  educationBox: {
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Univerity(): ReactElement {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [university, setUniversity] = useState<null | universityData>(null);
  const [degree, setDegree] = useState<string>('');
  const [fieldOfStudy, setFieldOfStudy] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [discription, setDiscription] = useState<string>('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [errors, setErrors] = useState<any>({});
  const handleClose = () => {
    setOpen(false);
  };
  const clearStates = () => {
    setUniversity(null);
    setDegree('');
    setFieldOfStudy('');
    setGrade('');
    setDiscription('');
    setStartYear('');
    setEndYear('');
    setErrors({});
  };
  const isValid = () => {
    const error: any = {};
    error.university = university === null && 'Please Select University.';
    error.degree = !degree.length && 'Please Enter Degree Name.';
    error.fieldOfStudy = !fieldOfStudy.length && 'Please Enter Feild Of Study.';
    error.grade = !grade.length && 'Please Enter Your Grades.';
    error.startYear =
      !startYear.length && 'Please Select Graduation Start Year.';
    error.endYear = !endYear.length && 'Please Select Graduation End Year.';
    if (!error.startYear && !error.endYear) {
      error.endYear =
        parseInt(startYear, 10) > parseInt(endYear, 10) &&
        'End Year Should Be Greater Then Start Year.';
    }
    setErrors(error);
    const keys = Object.keys(error).filter((k) => error[k]);
    if (keys.length) return false;
    return true;
  };
  const handleAddEducation = () => {
    if (!isValid()) return;
    dispatch(
      addEducationData({
        university,
        degree,
        fieldOfStudy,
        grade,
        discription,
        startYear,
        endYear,
      })
    );
    setOpen(false);
    clearStates();
    swal.fire({
      title: 'Good Job!',
      text: 'Education Added Successfully!',
      icon: 'success',
      timer: 2000,
    });
  };

  return (
    <EducationTemplate
      handleClose={handleClose}
      setUniversity={setUniversity}
      setDegree={setDegree}
      setFieldOfStudy={setFieldOfStudy}
      setGrade={setGrade}
      setDiscription={setDiscription}
      setStartYear={setStartYear}
      setEndYear={setEndYear}
      handleAddEducation={handleAddEducation}
      setOpen={setOpen}
      open={open}
      degree={degree}
      fieldOfStudy={fieldOfStudy}
      grade={grade}
      discription={discription}
      startYear={startYear}
      endYear={endYear}
      errors={errors}
      classes={classes}
    />
  );
}
