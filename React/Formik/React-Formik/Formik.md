The <Field> component by default will render an <input> component that, given a name prop, will implicitly grab the respective onChange, onBlur, value props and pass them to the element as well as any props you pass to it. However, since not everything is an input, <Field> also accepts a few other props to let you render whatever you want. Some examples..

     // <input className="form-input" placeHolder="Jane"  />
    <Field name="firstName" className="form-input" placeholder="Jane" />
    
    // <textarea className="form-textarea"/></textarea>
    <Field name="message" as="textarea" className="form-textarea" />
    
    // <select className="my-select"/>
    <Field name="colors" as="select" className="my-select">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
    </Field>