curl "https://library-express-api.herokuapp.com/movies/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo
