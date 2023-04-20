// Bootstrap components
import Stack from "react-bootstrap/Stack"
import Form from "react-bootstrap/Form"

/**
 * Search component renders a search bar
 * updates the state of Main component
 * when the value typed in the search is changed
 */
export default function Search({ updateSearch, updateFilter }) {
  // changes parent state when search bar is typed in
  function changeSearchString(e) {
    updateSearch(e.target.value)
  }

  // changes parent state when number of horns is selected
  function changeFilterCriteria(e) {
    updateFilter(e.target.value);
  }

  return (
    <Stack direction='horizontal' className='mb-5' gap={3}>

      {/*Search by keyword or title*/}
      <Form.Label htmlFor='search'></Form.Label>
      <Form.Control
        type='text'
        id='search'
        placeholder='Search by title or keyword'
        aria-describedby='searchHelp'
        onChange={(e) => changeSearchString(e)}
      />

      {/*Select Number of Horns */}
      <Form.Select aria-label='Number of Horns' onChange={(e) => changeFilterCriteria(e)}>
        <option value=''>Number of Horns</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
        <option value='100'>One Hundred</option>
      </Form.Select>
    </Stack>
  )
}
