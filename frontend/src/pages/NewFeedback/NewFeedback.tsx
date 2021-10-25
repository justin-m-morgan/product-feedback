import React from 'react';
import style from './NewFeedback.module.css';
import classnames from 'classnames';
import FormTemplate from '../../components/FormTemplate/FormTemplate';
import FormFieldgroup from '../../components/FormFieldgroup/FormFieldgroup';
import TextInput, { TextArea } from '../../components/TextInput/TextInput';
import Plus from '../../svg/Plus';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import { Option } from '../../components/SelectOptions/SelectOptions';
import FormPage from '../../components/FormPage/FormPage';

interface NewFeedbackProps {
  categoryOptions: Option[];
}
function NewFeedback({ categoryOptions }: NewFeedbackProps) {
  return (
    <div className={classnames(style.NewFeedback)}>
      <FormPage>
        <FormTemplate
          title="Create New Feedback"
          Icon={() => <Plus />}
          Buttons={() => (
            <>
              <Button kind="navy">Cancel</Button>
              <Button kind="purple">Add Feedback</Button>
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

export default NewFeedback;
