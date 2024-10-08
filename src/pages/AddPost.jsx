import { Container } from "postcss"
import { PostForm } from "../components"

const AddPost = () => {
  return (
    <div className="py-10">
        <Container>
            <PostForm/>
        </Container>
    </div>
  )
}
export default AddPost