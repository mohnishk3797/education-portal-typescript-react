import React, { ReactElement, useMemo, useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import EducationEntryForm from '../../molecules/educationEntryForm';
import ModalAtom from '../../atoms/modal';
import { universityData } from '../../../redux/actionTypes';
import EducationDetailsBox from '../../molecules/educationDetails';

const userName = (state: RootState) => state.auth.user.name;
const education = (state: RootState) => state.education.education;
interface educationTemplateProps {
  handleClose: () => void;
  setUniversity: (value: universityData | null) => void;
  setDegree: (value: string) => void;
  setFieldOfStudy: (value: string) => void;
  setGrade: (value: string) => void;
  setDiscription: (value: string) => void;
  setStartYear: (value: string) => void;
  setEndYear: (value: string) => void;
  handleAddEducation: () => void;
  setOpen: (val: boolean) => void;
  open: boolean;
  degree: string;
  fieldOfStudy: string;
  grade: string;
  discription: string;
  startYear: string;
  endYear: string;
  errors: any;
  classes: any;
}

export default function EducationTemplate({
  handleClose,
  setUniversity,
  setDegree,
  setFieldOfStudy,
  setGrade,
  setDiscription,
  setStartYear,
  setEndYear,
  handleAddEducation,
  setOpen,
  open,
  degree,
  fieldOfStudy,
  grade,
  discription,
  startYear,
  endYear,
  errors,
  classes,
}: educationTemplateProps): ReactElement {
  const name = useSelector(userName);
  const educationData = useSelector(education);
  const [openList, setOpenList] = useState<string | null>(null);
  const addNewEducationModal = useMemo(
    () => (
      <ModalAtom handleClose={handleClose} maxWidth="sm" open={open}>
        <DialogTitle id="alert-dialog-title">Education Details</DialogTitle>
        <DialogContent>
          <EducationEntryForm
            setUniversity={setUniversity}
            degree={degree}
            setDegree={setDegree}
            fieldOfStudy={fieldOfStudy}
            setFieldOfStudy={setFieldOfStudy}
            grade={grade}
            setGrade={setGrade}
            discription={discription}
            setDiscription={setDiscription}
            startYear={startYear}
            setStartYear={setStartYear}
            endYear={endYear}
            setEndYear={setEndYear}
            error={errors}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
          <Button
            onClick={handleAddEducation}
            color="primary"
            variant="contained"
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </ModalAtom>
    ),
    [open, degree, fieldOfStudy, grade, discription, startYear, endYear, errors]
  );
  const handleOpenList = (id: string) => {
    if (openList === id) {
      setOpenList(null);
    } else {
      setOpenList(id);
    }
  };
  useEffect(() => {
    console.log(educationData);
  }, [educationData]);
  return (
    <Grid container>
      {addNewEducationModal}
      <Grid item lg={12} sm={12} xs={12}>
        <Paper className={classes.heading} elevation={3}>
          <Typography variant="h5">
            Welcome To {name}&apos;s Education Page
          </Typography>
          <Button
            type="button"
            onClick={() => setOpen(true)}
            variant="contained"
            color="primary"
          >
            Add New Education
          </Button>
        </Paper>
      </Grid>
      <Grid item lg={12} sm={12} xs={12}>
        {educationData.map((obj) => {
          return (
            <EducationDetailsBox
              handleOpenList={handleOpenList}
              openList={openList}
              classes={classes}
              data={obj}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
