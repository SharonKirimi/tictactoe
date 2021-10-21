curl "https://library-express-api.herokuapp.com/movies/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "movie": {
      "title": "'"${TITLE}"'",
      "director": "'"${DIRECTOR}"'"
    }
  }'

  echo
