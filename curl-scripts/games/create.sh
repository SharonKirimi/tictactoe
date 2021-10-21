curl "https://library-express-api.herokuapp.com/movies" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "movie": {
      "title": "'"${TITLE}"'",
      "director": "'"${DIRECTOR}"'"
    }
  }'

echo
