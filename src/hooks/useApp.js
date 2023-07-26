// ========== App Hooks
// import all packages
import { useSelector, useDispatch } from 'react-redux'
import { setLike } from '../redux/features/like.slice'
import { setDislike } from '../redux/features/dislike.slice'

export function useApp () {
  const dispatch = useDispatch()
  const like = useSelector((states) => states.likeReducer.value)
  const dislike = useSelector((states) => states.dislikeReducer.value)

  const handleLike = () => {
    dispatch(setLike(like + 1))
  }

  const handleDislike = () => {
    dispatch(setDislike(dislike + 1))
  }

  return {
    like,
    handleLike,
    dislike,
    handleDislike
  }
}
