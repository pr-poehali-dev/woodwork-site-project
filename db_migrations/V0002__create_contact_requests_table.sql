CREATE TABLE IF NOT EXISTS t_p75735525_woodwork_site_projec.contact_requests (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(20) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'new',
  notes TEXT
);

CREATE INDEX idx_contact_requests_created_at ON t_p75735525_woodwork_site_projec.contact_requests(created_at DESC);
CREATE INDEX idx_contact_requests_status ON t_p75735525_woodwork_site_projec.contact_requests(status);