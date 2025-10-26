import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get all contact requests for admin panel
    Args: event with httpMethod, queryStringParameters (status filter optional)
          context with request_id attribute
    Returns: HTTP response with list of contact requests
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    database_url = os.environ.get('DATABASE_URL')
    params = event.get('queryStringParameters') or {}
    status_filter = params.get('status')
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    if status_filter:
        cur.execute(
            """
            SELECT id, phone, created_at, status, notes 
            FROM t_p75735525_woodwork_site_projec.contact_requests 
            WHERE status = %s
            ORDER BY created_at DESC
            """,
            (status_filter,)
        )
    else:
        cur.execute(
            """
            SELECT id, phone, created_at, status, notes 
            FROM t_p75735525_woodwork_site_projec.contact_requests 
            ORDER BY created_at DESC
            """
        )
    
    rows = cur.fetchall()
    
    requests = []
    for row in rows:
        requests.append({
            'id': row[0],
            'phone': row[1],
            'created_at': row[2].isoformat() if row[2] else None,
            'status': row[3],
            'notes': row[4]
        })
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'requests': requests,
            'total': len(requests)
        }),
        'isBase64Encoded': False
    }
