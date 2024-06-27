import Button from "@/components/Button";

// pages/breweries.js
export async function getbreweries() {
  const res = await fetch('https://api.openbrewerydb.org/v1/breweries');
  return res.json();
}

export default async function BreweriesPage() {
  const breweries = await getbreweries()
  return (
    <div>
      <h1>Breweriess</h1>
      <ul>
        {breweries?.map(brewery => (
          <>
            <li key={brewery?.id}>{brewery?.name} - {brewery?.city}</li>
            <h1>hello</h1>
            <Button />
          </>
        ))}
      </ul>
    </div>
  );
}

