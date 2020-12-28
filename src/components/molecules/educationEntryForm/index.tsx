import React, { ReactElement } from 'react';
import UniversityDropDown from '../../atoms/dropDown/universityDropDown';
import InputField from '../../atoms/input';
import DropDown from '../../atoms/dropDown';
import { universityData } from '../../../redux/actionTypes';

interface Props {
  setUniversity: (data: universityData | null) => void;
  degree: string;
  setDegree: (value: string) => void;
  fieldOfStudy: string;
  setFieldOfStudy: (value: string) => void;
  grade: string;
  setGrade: (value: string) => void;
  discription: string;
  setDiscription: (value: string) => void;
  startYear: string;
  setStartYear: (value: string) => void;
  endYear: string;
  setEndYear: (value: string) => void;
  error: any;
}

export default function EducationEntryForm({
  setUniversity,
  degree,
  setDegree,
  fieldOfStudy,
  setFieldOfStudy,
  grade,
  setGrade,
  discription,
  setDiscription,
  startYear,
  setStartYear,
  endYear,
  setEndYear,
  error,
}: Props): ReactElement {
  return (
    <div>
      <UniversityDropDown
        error={error.university}
        errorText={error.university}
        setUniversity={setUniversity}
      />
      <InputField
        required
        id="degree"
        name="degree"
        value={degree}
        onChange={(value) => setDegree(value)}
        variant="outlined"
        label="Degree"
        secure={false}
        error={error.degree}
        multiline={false}
        errorText={error.degree}
        disabled={false}
        fullWidth
        style={undefined}
      />
      <InputField
        required
        id="fieldOfStudy"
        name="fieldOfStudy"
        value={fieldOfStudy}
        onChange={(value) => setFieldOfStudy(value)}
        variant="outlined"
        label="Feild Of Study"
        secure={false}
        error={error.fieldOfStudy}
        multiline={false}
        errorText={error.fieldOfStudy}
        disabled={false}
        fullWidth
        style={undefined}
      />
      <DropDown
        data={Array.from({ length: 45 }, (_, i) => `${i + 1976}`)}
        id="startYear"
        label="Start Year"
        onChange={(value: string) => setStartYear(value)}
        value={startYear}
        error={error.startYear}
        errorText={error.startYear}
      />
      <DropDown
        data={Array.from({ length: 55 }, (_, i) => `${i + 1976}`)}
        id="endYear"
        label="End Year (Or Expected)"
        onChange={(value: string) => setEndYear(value)}
        value={endYear}
        error={error.endYear}
        errorText={error.endYear}
      />
      <InputField
        required
        id="grade"
        name="grade"
        value={grade}
        onChange={(value) => setGrade(value)}
        variant="outlined"
        label="Grade"
        secure={false}
        multiline={false}
        error={error.grade}
        errorText={error.grade}
        disabled={false}
        fullWidth
        style={undefined}
      />
      <InputField
        required
        id="discription"
        name="discription"
        value={discription}
        onChange={(value) => setDiscription(value)}
        variant="outlined"
        label="Discription"
        multiline
        secure={false}
        error={false}
        errorText=""
        disabled={false}
        fullWidth
        style={undefined}
      />
    </div>
  );
}
