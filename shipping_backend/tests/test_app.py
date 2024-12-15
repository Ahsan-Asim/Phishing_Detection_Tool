# tests/test_app.py

import json
import pytest
from ..app import app  # Use relative import to access app.py
@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_check_url(client):
    response = client.post('/check_url', json={'text': 'http://example.com/phishing'})
    assert response.status_code == 200
    data = json.loads(response.data)
    assert 'prediction' in data
    assert 'confidence' in data
