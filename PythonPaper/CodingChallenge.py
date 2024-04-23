class HandshakeError(Exception):
  pass

def no_of_handshakes(no_people):
  if no_people < 0:
    raise HandshakeError("Number of people cannot be negative")
  
  if no_people == 0 or no_people == 1:
    return 0
  
  total_handshakes = 0

  for i in range(1, no_people):
    total_handshakes += i

  return total_handshakes

try: 
  print(no_of_handshakes(5))
  print(no_of_handshakes(-5))
except HandshakeError as e:
  print(e)