import os
import requests

class AstroKalki:
    def __init__(self, api_key: str, base_url: str | None = None):
        self.api_key = api_key
        self.base_url = base_url or "https://api.astrokalki.com"

    def list_readings(self):
        response = requests.get(
            f"{self.base_url}/v1/readings",
            headers={"Authorization": f"Bearer {self.api_key}"},
            timeout=10,
        )
        response.raise_for_status()
        return response.json()


def from_env() -> "AstroKalki":
    return AstroKalki(api_key=os.environ["ASTROKALKI_KEY"])
