import renderer from 'react-test-renderer';
import ExerciseForm from './ExerciseForm';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <ExerciseForm page="http://www.facebook.com">Facebook</ExerciseForm>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props().handleSubmit;
  });

})
  /*
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})
  /*
  // manually trigger the callback
  renderer.act(() => {
    tree.onChange();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
*/