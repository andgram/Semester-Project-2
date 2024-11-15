import { API_AUCTION_LISTINGS } from "../constants";
import { headers } from "../headers";

export async function createAuction({ title, description, media, endsAt  }) {

  const data = JSON.stringify({ title, description, media, endsAt });
  const response = await fetch(`${API_AUCTION_LISTINGS}`, {
    method: "POST",
    body: data,
    headers: headers(),
  });

  const json = await response.json();

  if (response.ok === false) {
    throw new Error(json.errors[0].message);
  }

  return json;
}