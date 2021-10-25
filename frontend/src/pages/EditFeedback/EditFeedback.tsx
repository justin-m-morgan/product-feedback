import React from 'react';
import style from './EditFeedback.module.css';
import classnames from 'classnames';
import FormTemplate from '../../components/FormTemplate/FormTemplate';
import FormFieldgroup from '../../components/FormFieldgroup/FormFieldgroup';
import TextInput, { TextArea } from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import { Option } from '../../components/SelectOptions/SelectOptions';
import Request from '../../types/Request.interface';
import Edit from '../../svg/Edit';
import Link from '../../components/Link/Link';
import Arrow from '../../svg/Arrow';
import FormPage from '../../components/FormPage/FormPage';

interface EditFeedbackProps {
  categoryOptions: Option[];
  request: Request;
}
function EditFeedback({ request, categoryOptions }: EditFeedbackProps) {
  return (
    <div className={classnames(style.EditFeedback)}>
      <FormPage>
        <FormTemplate
          title={`Edit '${request.title}'`}
          Icon={() => <Edit />}
          Buttons={() => (
            <>
              <div className={style.selfStart}>
                <Button kind="red">Delete</Button>
              </div>
              <Button kind="navy">Cancel</Button>
              <Button kind="purple">Save Edits</Button>
            </>
          )}
        >
          <FormFieldgroup
            inputName="title"
            label="Feedback Title"
            instructions="Add a short, descriptive headline"
          >
            <TextInput />
          </FormFieldgroup>
          <FormFieldgroup
            inputName="category"
            label="Category"
            instructions="Choose a category for your feedback"
          >
            <Dropdown
              fieldName="category"
              options={categoryOptions}
              currentSelection={categoryOptions[0].label}
              handleChange={() => {}}
            />
          </FormFieldgroup>
          <FormFieldgroup
            inputName="description"
            label="Feedback Detail"
            instructions="Include any specific comments on what should be improved, added, etc."
          >
            <TextArea />
          </FormFieldgroup>
        </FormTemplate>
      </FormPage>
    </div>
  );
}

export default EditFeedback;
